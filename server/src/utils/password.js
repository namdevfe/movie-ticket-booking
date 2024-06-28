import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS)
  const passwordHashed = bcrypt.hashSync(password, salt)
  return passwordHashed
}

export const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}
