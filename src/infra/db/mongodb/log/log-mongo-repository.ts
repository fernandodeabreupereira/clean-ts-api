import { LogErrorRepository } from '../../../../data/protocols/db/log/log-error-repository'
import { MongoHelper } from '../helpers/mongodb-helper'

export class LogMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorCollection = MongoHelper.getCollection('errors')
    await errorCollection.insertOne({
      stack,
      date: new Date()
    })
  }
}
