

module_variable = 42

def module_function():
    print("This is a function defined in the module")

class ModuleClass:

    def __init__ (self, name):
        self.name = name

    def greet(self):
        print(f"Hello, (self, name) !")

if __name__ == "__main":
    print("This code runs when the module is executed directly")


