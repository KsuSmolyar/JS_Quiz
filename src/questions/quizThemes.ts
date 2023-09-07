import { questionCards_1 } from "./section_1";
import { questionCards_2 } from "./section_2";
import { questionCards_3 } from "./section_3";
import { questionCards_4 } from "./section_4";
import { QuizThemes } from "./types";

export const DEFAULT_THEME = 'baseJS';
export const quizThemes: QuizThemes = {
  baseJS: {
    title: "Основы JS",
    data: questionCards_1
  },
  dataTypes: {
    title: "Типы данных",
    data: questionCards_2
  },
  typeConversion: {
    title: "Приведение типов, сравнение",
    data: questionCards_3
  },
  string: {
    title: "Строки",
    data: questionCards_4
  }

}



