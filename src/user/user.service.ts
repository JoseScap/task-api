import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { IUser } from './interface/user.interface';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const createdUser: UserDocument = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find();
  }

  async findOne(id: string): Promise<IUser> {
    const user: UserDocument = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException("User doesn't exist");
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const user: UserDocument = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException("User doesn't exist");
    }

    return await user.update(updateUserDto);
  }

  async remove(id: string): Promise<string> {
    const user: UserDocument = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException("User doesn't exist");
    }

    return await user.delete();
  }
}
