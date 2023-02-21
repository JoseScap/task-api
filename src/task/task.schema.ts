import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from 'src/user/user.schema';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ required: true })
  readonly task: string;
  @Prop({ required: false })
  readonly description: string;
  @Prop({ required: true, default: false })
  readonly done: boolean;
  @Prop({ type: Types.ObjectId, ref: User.name })
  readonly user: User;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
