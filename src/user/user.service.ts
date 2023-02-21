import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserResponse } from './dto/response-user.dto';
import {
  mapUserDocumentsToUserResponses,
  mapUserDocumentToUserResponse,
} from './user.helper';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async encryptPassword(
    password: string,
  ): Promise<{ hash: string; salt: string }> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return { hash, salt };
  }

  async create(createUserDto: CreateUserDto): Promise<UserResponse> {
    const { hash, salt } = await this.encryptPassword(createUserDto.password);
    const createdUser: UserDocument = new this.userModel({
      ...createUserDto,
      password: hash,
      salt,
    });
    const user = await createdUser.save();
    return mapUserDocumentToUserResponse(user);
  }

  async findAll(): Promise<UserResponse[]> {
    const users = await this.userModel.find();
    const mappedUsers = mapUserDocumentsToUserResponses(users);
    return mappedUsers;
  }

  async findOne(id: string): Promise<UserResponse> {
    const user: UserDocument = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException("User doesn't exist");
    }

    return mapUserDocumentToUserResponse(user);
  }

  async findOneByUsername(username: string): Promise<UserDocument> {
    const user: UserDocument = await this.userModel.findOne({ username });

    if (!user) return null;
    return user;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponse> {
    const user: UserDocument = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException("User doesn't exist");
    }

    await user.update(updateUserDto);

    return mapUserDocumentToUserResponse(user);
  }

  async remove(id: string): Promise<string> {
    const user: UserDocument = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException("User doesn't exist");
    }

    return id;
  }
}
