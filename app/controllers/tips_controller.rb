class TipsController < ApplicationController
  def index
    @tips = Tip.all
    respond_to do |format|
      format.html
      format.json { render :json => @tips }
    end
  end

  def show
    @tip = Tip.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render :json => @tip }
    end
  end
end

