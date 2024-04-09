class CreateGames < ActiveRecord::Migration[7.1]
  def change
    create_table :games do |t|

      t.string :title
      t.string :cover_art
      t.date :release_date
      t.string :comment

      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :console, null: false, foreign_key: true
      t.belongs_to :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end
