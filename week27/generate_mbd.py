mbd_content = """\
begin: data;
    problem: initial value;
    initial time: 0.0;
    final time: 5.0;
    time step: 0.01;
    max iterations: 10;
    tolerance: 1.0e-6;
end: data;

begin: gravity;
    0.0, 0.0, -9.81;
end: gravity;

begin: node: struct;
    1,
    position: 0.0, 0.0, 1.0;
end: node;
"""

with open("test7.mbd", "w") as f:
    f.write(mbd_content)

print("MBDyn input file 'test7.mbd' generated.")
