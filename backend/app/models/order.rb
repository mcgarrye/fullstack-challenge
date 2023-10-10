class Order < ApplicationRecord
    has_many :selections
    has_many :pizzas, through: :selections
end
