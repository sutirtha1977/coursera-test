# class Counter
# 	def initialize
# 		@count = 0
# 	end
# 	def increment
# 		@count += 1
# 		puts @count
# 	end
# end

# a = Counter.new
# b = Counter.new

# c = b
# d = c

# a.increment
# b.increment
# c.increment
# d.increment

# class CelestialBodies
# 	attr_accessor :name, :type
# end

# default_body = CelestialBodies.new
# default_body.type = 'planet'

# bodies = Hash.new(default_body)
# bodies['Mars'].name = 'Mars'
# p bodies['Mars']

# bodies['Europa'].name = 'Europa'
# bodies['Europa'].type = 'moon'
# p bodies['Europa']

# bodies['Venus'].name = 'Venus'
# p bodies['Venus']
# p bodies['Mars']
# p bodies['Europa']


grades = Hash.new('A')

p grades['Regina']
grades['Regina'] = 'B'

p grades['Regina']
p grades['Carl']
grades['Carl'] = 'C'
p grades['Carl']
p grades
p grades.default








