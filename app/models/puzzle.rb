class Puzzle < ApplicationRecord
  has_many :scores, dependent: :destroy

  validates :title, presence: true
  validates :characters, presence: true
  validates :image, presence: true
  validates :height, presence: true
  validates :width, presence: true
  # validates :score_id, presence: true
end
