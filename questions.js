import {data} from './data.js'
import {Question} from './models/Questions.js'

export const questionArray = data.map(q=> new Question(q.question,q.choices,q.answer))