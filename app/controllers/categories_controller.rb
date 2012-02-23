class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    respond_to do |format|
      format.html
      format.json { render :json => @categories }
    end
  end
end
