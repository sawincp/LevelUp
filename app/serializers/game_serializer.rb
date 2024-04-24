class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :cover_art, :release_date, :comment, :user_id, :console_id, :genre_id, :youtubeId

  # belongs_to :user
  belongs_to :console
  # belongs_to :genre
end
