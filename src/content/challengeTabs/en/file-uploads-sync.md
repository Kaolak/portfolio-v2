---
diagram: "file-upload-sync"
---

## Approach 2: Staged Upload with Synchronous Validation

For operations where the file is required to complete a business transaction (e.g., creating an item that requires an image), a staged approach with synchronous validation is used.

**Phase 1 - Pre-upload:** The client uploads the file to a temporary bucket using a signed URL. The object path follows the pattern `/userid/operationid/`, where `userid` ensures the user can only access their own files, and `operationid` distinguishes between multiple upload attempts for the same operation.

**Phase 2 - Confirm & Validate:** The client sends the business operation request (e.g., POST /items with item data) including the `operationid` instead of the file itself. The backend retrieves the file from the temp bucket using the path, runs all validations synchronously (existence, integrity, antivirus, format, business rules), and only if all pass, moves the file to the permanent bucket and completes the business operation. If any validation fails, the operation is rejected and the temp file remains for retry or cleanup via TTL.

This approach guarantees that the business operation never completes with an invalid file, while keeping large file transfers out of the application server.

### Flow

1. Backend issues signed PUT URL for temp bucket at `/userid/operationid/`
2. Client uploads file directly to temp location
3. Client sends business operation request with `operationid` (no file)
4. Backend retrieves file from temp bucket using path
5. Validation pipeline runs synchronously
6. If all validations pass: move file to permanent bucket, complete operation
7. If any validation fails: reject operation, return error, temp file expires via TTL
8. On success: temp file cleaned up, permanent file linked to created entity