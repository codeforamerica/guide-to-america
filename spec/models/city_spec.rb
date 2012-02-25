require 'spec_helper'

describe City do
  it "should require a name" do
    c = City.new(:machine_name => "the_big_easy")
    c.should_not be_valid
  end

  it "should require a machine readable name" do
    c = City.new(:name => "The Big Beignet")
    c.should_not be_valid
  end

  it "should make sure that the machine readable name only has word characters" do
    c = City.new(:name => "The Big Beignet", :machine_name => "Nom Nom")
    c.should_not be_valid
  end

  it "should include associated tips in json output" do
    c = Factory(:city_with_tips)
    j = c.to_json
    ActiveSupport::JSON.decode(j)["tips"].should_not be_nil
  end
end
