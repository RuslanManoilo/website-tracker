import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcryptjs";

@Injectable()
export class PasswordService {
  async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }
}
