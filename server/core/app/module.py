import sys
import os

def make_module():
    module_name = sys.argv[1]
    if os.path.exists(module_name):
        print("Module already exists")
        return
    
    os.mkdir(module_name)
    module_path = os.path.join(os.getcwd(), module_name)
    
    # create a __init__.py file
    with open(os.path.join(module_path, "__init__.py"), "w") as f:
        f.write("")
        
make_module()


