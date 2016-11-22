# def my_method(&my_block)
# 	puts "We're in the method, about to invoke your block!"
# 	my_block.call
# 	puts "We're back in the method!"
# end

# my_method do
# 	puts "We're in the block!"
# end

# def total(prices)
# 	amount = 0
# 	prices.each do |price|
# 		amount += price
# 	end
# 	amount
# end

# def refund(prices)
# 	amount = 0
# 	prices.each do |price|
# 		amount -= price
# 	end
# 	amount
# end

# def show_discounts(prices)
# 	prices.each do |price|
# 		amount_off = price / 3.0
# 		puts format("Your discount: $%.2f", amount_off)
# 	end
# end

# prices = [3.99, 25.00, 8.99]

# puts format("%.2f", total(prices))
# puts format("%.2f", refund(prices))
# show_discounts(prices)

def print_block_result
	block_result = yield
	puts block_result
end
print_block_result {1 + 1}
print_block_result do
	"I'm not the last expression, so I'm not the return value"
	"I'm the result"
end
print_block_result {"I hated Truncated".include?("Truncated")}


