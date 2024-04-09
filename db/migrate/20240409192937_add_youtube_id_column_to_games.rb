class AddYoutubeIdColumnToGames < ActiveRecord::Migration[7.1]
  def change
    add_column :games, :youtubeId, :string
  end
end
