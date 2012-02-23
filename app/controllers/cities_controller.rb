class CitiesController < ApplicationController
  def index
    @cities = City.all
    respond_to do |format|
      format.html
      format.json { render :json => @cities }
    end
  end
  
  def show
    @city = City.where(:machine_name => params[:machine_name]).first
    respond_to do |format|
      format.html
      format.json { render :json => @city }
    end
  end

  def tips
    @city = City.where(:machine_name => params[:machine_name]).first
    @tips = @city.tips
    respond_to do |format|
      format.html
      format.json { render :json => @city }
    end
  end
end
