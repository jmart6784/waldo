class Score < ApplicationRecord
  belongs_to :puzzle
  
  validates :name, presence: true
  validates :name, length: { maximum: 10 }
  validates :score, presence: true
  validates :puzzle_id, presence: true
end
