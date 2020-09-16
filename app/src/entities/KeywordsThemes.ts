import { Column, Index } from 'typeorm';

@Index('index_keywords_themes_on_theme_id_and_keyword_id', ['themeId', 'keywordId'], { unique: true })
// @Entity('keywords_themes')
export class KeywordsThemes {
  @Column('int', { name: 'keyword_id' })
  keywordId: number;

  @Column('int', { name: 'theme_id' })
  themeId: number;
}
