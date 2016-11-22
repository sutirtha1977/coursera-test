# protons = {"H" => 1, "Li" => 3, "Ne" => 10}
# puts protons.class
# puts protons.inspect
# puts protons.length
# puts protons.has_key?("Ne")
# puts protons.has_value?(3)
# p protons.keys
# p protons.values

class Candidate
	attr_accessor :name, :age, :occupation, :hobby, :birthplace

	def initialize(name, options)
		self.name = name
		self.age = options[:age]
		self.occupation = options[:occupation]
		self.hobby = options[:hobby]
		self.birthplace = options[:birthplace]
	end
end

candidate = Candidate.new("Carl Barnes", {:age => 37, :occupation => "Engineer", :birthplace => "Seattle"})
p candidate

# def print_summary(candidate)
# 	puts "Candidate: #{candidate.name}"
# 	puts "Age: #{candidate.age}"
# 	puts "Occupation: #{candidate.occupation}"
# 	puts "Hobby: #{candidate.hobby}"
# 	puts "BirthPlace: #{candidate.birthplace}"
# end

# candidate = Candidate.new("Carl Barnes", 49, "Attoney",nil, "Miami")
# print_summary(candidate)


# def area(options)
# 	options[:length] * options[:width]
# end

# puts area({:length => 2, :width => 4})







