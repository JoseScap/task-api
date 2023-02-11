import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  readonly firstname: string;
  @Prop({ required: true })
  readonly lastname: string;
  @Prop({ required: true, unique: true })
  readonly username: string;
  @Prop({ required: true })
  readonly password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
