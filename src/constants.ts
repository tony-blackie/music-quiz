export enum Routes {
  ROOT = "/",
  LOGIN = "/login",
  QUIZ = "/quiz",
  SCORE = "/score",
}

export const API_URL = `http://${process.env.API_HOST}:${process.env.API_PORT}`;

export const INITIAL_QUESTION_INDEX = 1;

export const SONGS_COUNT_PER_QUESTION = 4;
