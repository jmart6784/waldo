class PuzzlesController < ApplicationController
  def index
    @puzzles = Puzzle.all
  end

  def show
    @score = Score.new
    @puzzle = Puzzle.find(params[:id])
    @scores = @puzzle.scores.order("score::integer ASC")

    ary = @puzzle.characters.split(" ")
    @characters = []

    ary.each do |char|
      if char === "WizardWhitebeard"
        char = "Wizard Whitebeard"
      end

      @characters << char
    end
  end
end
