import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  constructor(
    id: number,
    name: string,
    email: string,
    phone: string,
    jobTitle: string,
    type: string,
    role: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.jobTitle = jobTitle;
    this.type = type;
    this.role = role;
  }
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  phone: string;

  @Field()
  @Column()
  jobTitle: string;

  @Field(() => Role)
  @Column()
  role: string;

  @Field({ nullable: true })
  @Column()
  type?: string;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  STAFF = 'STAFF',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'Role of the employee',
});
