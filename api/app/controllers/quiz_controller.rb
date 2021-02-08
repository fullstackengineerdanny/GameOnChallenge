class QuizController < ApplicationController
    def index
        # The intent was to connect to a remote Mongo collection here for the quiz contents
        # A local database connection also proved unstable
        # The initial conclusion was this is a Windows issue with the Mongoid gem
        # Now believed to simply be an environmental issue specific to my laptop
        # Chose to proceed with a static quiz in the interest of time
        # The issue will continue to be looked into
        @quiz = { :pages => 2, :q11 => "Which team most recently won the Super Bowl?", :a11 => Array['Dallas Cowboys', 'Seattle Seahawks', 'Green Bay Packers', 'Minnesota Vikings'], :q12 => "Which player had the highest touchdowns scored in 2020?", :a12 => Array['Patrick Mahomes', 'Tom Brady', 'Saquon Barkley', 'Aaron Rodgers'], :q13 => "Which team has the most Super Bowl wins?", :a13 => Array['Houston Texans', 'Cleveland Brows', 'New York Giants', 'Los Angeles Rams'], :q14 => "Which player has had the most injuries?", :a14 => Array['Aaron Donald', 'Todd Gurley', 'Khalil Mack', 'Kyler Murray'], :q21 => "Who's the current youngest player?", :a21 => Array['Kurt Warner', 'Jerry Rice', 'Joe Montana', 'Jim Brown'], :q22 => "Who retired last year?", :a22 => Array['Barry Sanders', 'Troy Aikman', 'Joe Namath', 'Terry Bradshaw'], :q23 => "Which team comes from the largest city?", :a23 => Array['Panthers', 'Chargers', 'Titans', 'Bengals'], :q24 => "Which team has made the most recent roster change?", :a24 => Array['Jaguars', 'Colts', 'Falcons', 'Cardinals'] }.to_json # get from Mongo
        render json: @quiz
    end
end