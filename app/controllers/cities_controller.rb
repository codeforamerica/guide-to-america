class CitiesController < ApplicationController
  def index
    @cities = City.all
    respond_to do |format|
      format.html
      format.json { render :json => @cities }
    end
  end
end
