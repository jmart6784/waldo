class CreatePuzzles < ActiveRecord::Migration[6.0]
  def change
    create_table :puzzles do |t|
      t.string :title
      t.string :characters
      t.string :image
      t.string :height
      t.string :width
      t.integer :score_id

      t.timestamps
    end
  end
end
