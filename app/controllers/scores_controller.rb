class ScoresController < ApplicationController
  def create 
    @puzzle = Puzzle.find(score_params[:puzzle_id])

    @score = Score.new(score_params)
    @score.puzzle_id = @puzzle.id

    @score.save

    redirect_to @puzzle
  end

  private

  def score_params
    params.require(:score).permit(:name, :score, :puzzle_id)
  end
end
