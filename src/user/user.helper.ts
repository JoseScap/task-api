import { UserResponse } from './dto/response-user.dto';
import { UserDocument } from './user.schema';

export function mapUserDocumentsToUserResponses(users: UserDocument[]) {
  return users.map((user) => {
    return new UserResponse({
      _id: user._id.toString(),
      username: user.username,
    });
  });
}

export function mapUserDocumentToUserResponse(user: UserDocument) {
  return new UserResponse({
    _id: user._id.toString(),
    username: user.username,
  });
}
