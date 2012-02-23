class TipsController < ApplicationController
  def index
    @tips = Tip.all
    respond_to do |format|
      format.html
      format.json { render :json => @tips }
    end
  end
end
