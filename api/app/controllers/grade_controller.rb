class GradeController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @score = 0
        @correct = [2, 3, 3, 1, 2, 1, 4, 4]
        @answers = params[:answers]

        for i in 0..@correct.length - 1 do
            if @correct[i] == @answers[i]
                @score = @score + 1
            end
        end

        @result = { :score => "#{@score} / #{@correct.length}" }.to_json
        render json: @result
    end
end