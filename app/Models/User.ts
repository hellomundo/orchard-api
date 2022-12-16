import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Family from './Family'
import Task from './Task'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public firstName: string

  @column()
  public lastName: string
  
  @column()
  public email: string
  
  @column()
  public isActive: boolean
  
  @column()
  public familyId: number

  @belongsTo(() => Family)
  public family: BelongsTo<typeof Family>

  @hasMany(() => Task)
  public task: HasMany<typeof Task>
}
