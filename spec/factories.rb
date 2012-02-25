FactoryGirl.define do
  factory :user do
    sequence(:email){ |n| "email-#{n}@test.com" }
    name Faker::Name.name
    password "adminadmin"
    password_confirmation "adminadmin"
  end

  factory :city do
    name Faker::Address.city
    machine_name "realtown"
  end

  factory :tip do
    tip Faker::Lorem.sentence
  end

  factory :city_with_tips, :parent => :city do |city|
    city.after_create { |a| Factory(:tip, :city => a) }
  end
end
