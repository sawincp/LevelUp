class RenameCommentsToCommentInGames < ActiveRecord::Migration[7.1]
  def change
    rename_column :games, :comments, :comment
  end
end
