class Api::CatsController < ApplicationController
  def index
    render json: User.random_cat(current_user.liked_cats)
  end

  def my_cats
    render json: User.liked(current_user.liked_cats)
  end

  def update
    # PUT /api/cats/7 (params[:id]) "7"
    current_user.liked_cats << params[:id].to_i
    current_user.save
  end
end
