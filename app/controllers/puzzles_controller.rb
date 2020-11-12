class PuzzlesController < ApplicationController
  def index
    @puzzles = Puzzle.all
  end

  def show
    @puzzle = Puzzle.find(params[:id])

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
