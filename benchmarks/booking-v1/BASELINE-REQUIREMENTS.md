# Booking baseline — exact functional requirements

## Actors and identity
Synthetic fixture users `u-alice`, `u-bob`, `u-cara`. Test harness injects `viewerId` through typed domain/service call. For HTTP demonstrations use a **server-controlled test-only session mapping**, not user-controlled `x-user-id` trust; no authorization claims about real deployment authentication. Unauthorized/anonymous requests return 401, access to others' records returns 404 to avoid information disclosure.

## Core entity
```ts
type Booking = {
  id: string;
  ownerId: string;
  resourceId: string;
  startAt: string; // ISO UTC
  endAt: string;   // ISO UTC
  title: string;   // 1..120 printable chars
  status: "active" | "cancelled";
  createdAt: string; // ISO UTC
};
```
IDs stable opaque non-guessable in real systems (fixture deterministic IDs okay). Resource includes fixed IDs `room-1`, `room-2`. Clock injected for deterministic tests. No untrusted user-configurable access scope; no tenant field in baseline.

## Operations
1. `createBooking(viewerId, input)`: user creates their own active booking; server chooses id/owner/createdAt; validate existing resource and `startAt < endAt`; no overlapping active booking on same resource using half-open UTC intervals `[start,end)`. Rejected creation is atomic/no partial write.
2. `listBookings(viewerId)`: only own records, sorted by `startAt` ascending then id; includes active and cancelled with explicit status.
3. `getBooking(viewerId,id)`: only owner may read; missing or other-owner returns NOT_FOUND.
4. `cancelBooking(viewerId,id)`: only owner may cancel; repeat cancellation is idempotent and returns cancelled state. Cancelled slots no longer block booking.
5. `listResources()`: read-only allowlisted resource catalog, no credentials required.
6. Input errors: INVALID_INPUT; resource/time conflict: CONFLICT; unauthenticated: UNAUTHENTICATED; unauthorized read/cancel: NOT_FOUND. API maps to 400/409/401/404; no raw stack traces or secret data.

## Fixed initial dataset
Resources room-1, room-2. Alice booking b-a1 (room-1 2026-11-10T10:00:00Z–11:00Z), Bob b-b1 (room-2 same interval), Cara no bookings. Tests may reset state between cases. Fixed UTC clock for createdAt and fixed ID generator for reproducibility.

## Minimal UI
Page with resource dropdown, start/end UTC form, own booking list and cancel action; supports state/error/empty and keyboard use. Presentation is not primary scoring mechanism; trusted domain/API tests carry authority.

## Nonfunctional
TypeScript strict; deterministic id/clock injection; accessible labels; no external network; small fixtures; unit + API integration; separation of trusted identity from untrusted payload. Idempotency/concurrency semantics: create must be single serialized atomic operation for the selected local persistence backend. This demo is **not** production-safe for arbitrary public user signups.

## Acceptance examples
- Alice sees b-a1, not b-b1. Bob cannot cancel b-a1 and receives NOT_FOUND without mutating store.
- Create adjacent reservation [11:00,12:00) for room-1 succeeds; [10:30,11:30) conflicts.
- Alice cancels b-a1, then new booking in freed slot succeeds.
- Missing or malformed ISO timestamp, end <= start, invalid resource, title too long rejected.
- Re-running same cancel returns cancelled; list preserves sorting and status.
