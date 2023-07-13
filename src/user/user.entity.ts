import { Entity, PrimaryGeneratedColumn, Column, AfterInsert, AfterRemove, AfterUpdate } from 'typeorm'
@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id ', this.id)
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updateed User with id ', this.id)
  }

  @AfterRemove()
  logRemove() {
    console.log('Removeed User with id ', this.id)
  }
}