class PuzzlesController < ApplicationController
  def index
    if Puzzle.all.count === 0
      puzzle1 = Puzzle.create(title: "Waldo at the beach", characters: "Waldo WizardWhitebeard Wenda Odlaw", image: "img1.jpeg", height: "819", width: "1456")

      puzzle2 = Puzzle.create(title: "Waldo goes skiing", characters: "Waldo WizardWhitebeard Wenda Odlaw", image: "img2.jpg", height: "819", width: "1456")

      puzzle1 = Puzzle.create(title: "Waldo at the Olympics", characters: "Waldo WizardWhitebeard Wenda Odlaw", image: "img3.jpg", height: "819", width: "1456")
    end

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
