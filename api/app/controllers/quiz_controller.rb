class QuizController < ApplicationController
    def index
        @quiz = { :q1 => "", :a1 => Array[], :q2 => "", :a2 => Array[], :q3 => "", :a3 => Array[], :q4 => "", :a4 => Array[] }.to_json # get from Mongo
        render json: @quiz
    end
end