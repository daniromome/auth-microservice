import { prop, Ref } from '@typegoose/typegoose'
import { Role } from '../role/role.model'
import { User } from '../user/user.model'
import { VerificationToken } from './verification-token.model'
import { Service } from './service.model'

export class ServiceUser {
  @prop({ ref: () => User, required: true })
  public user!: Ref<User>

  @prop({ ref: () => Service, required: true })
  public service!: Ref<Service>

  @prop({ ref: () => Role, required: true })
  public roles!: Ref<Role>[]

  @prop({ type: () => VerificationToken, _id: false })
  public verificationToken?: VerificationToken

  @prop({ default: false })
  public disabled!: boolean
}
