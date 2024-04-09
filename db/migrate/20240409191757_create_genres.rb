class CreateGenres < ActiveRecord::Migration[7.1]
  def change
    create_table :genres do |t|

      t.string :genre_type

      t.timestamps
    end
  end
end
