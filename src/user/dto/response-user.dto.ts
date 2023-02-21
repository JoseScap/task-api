import { Exclude } from 'class-transformer';
import { IUser } from '../user.interface';

export class UserResponse implements IUser {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  @Exclude()
  password?: string;
  @Exclude()
  salt?: string;

  constructor(partial: Partial<UserResponse>) {
    Object.assign(this, partial);
  }
}
