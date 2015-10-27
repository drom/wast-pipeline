(module
    ;; function ret_i32 () { return 0; }
    (func $ret_i32 (result i32) (i32.const 0))

    ;; function add42 (a) { return a + 42; }
    (func $add42 (param $a i32) (result i32)
        (return (i32.add (get_local $a) (i32.const 42)))
    )

    ;; function add (x, y) { return x + y; }
    (func $add (param $x i32) (param $y i32) (result i32)
        (return (f32.add (get_local $x) (get_local $y)))
    )

    ;; function aif1 (p0) { if (1) { p0; } }
    (func $aif_1 (param i32) (if (i32.const 1) (get_local 0)))

    ;; function aif_2 (p0) { if (p0) { return 2; } else { return 3; } }
    (func $aif_2 (param i32) (result i32)
        (if (get_local 0)
            (return (i32.const 2))
            (return (i32.const 3))
        )
    )
    ;; function aif_3 (p0, p1) { return 1 ? 0 : 1; }
    (func $aif_3 (param i32) (param i32) (result i32)
        (return (if (i32.const 1) (get_local 0)(get_local 1)))
    )
)
