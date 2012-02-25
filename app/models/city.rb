class City < ActiveRecord::Base
  validates_presence_of :name, :machine_name
  validates_format_of :machine_name, :with => /\A\w+\z/, :message => "Machine name can only contain letters, numbers, and underscores."

  has_many :tips

  def to_json(options = {})
    super(:include => :tips)
  end
end
