import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { id: 'about', label: '关于我' },
    { id: 'experience', label: '工作经历' },
    { id: 'skills', label: '技能专长' },
    { id: 'contact', label: '联系我' },
  ]

  const experiences = [
    {
      title: 'DeFi 产品经理',
      company: '隐研科技',
      period: '2020.8 — 2025.12',
      highlight: 'TVL 最高达 26.3M',
      tags: ['AMM DEX', 'SwapV2', 'Lending', 'Mining'],
      responsibilities: [
        '负责基于 Uniswap V2 机制的 AMM DEX 产品设计与迭代，在保留恒定乘积做市商模型核心逻辑的基础上，围绕交易流程、信息呈现进行用户体验深度优化，包括更直观的盈亏展示、无常损失预估、LP份额。',
        '规划杠杆借贷产品，设计抵押品管理（支持LP抵押）、风险预警及爆仓抢拍流程，结合链上预言机价格锚定机制，保障清算逻辑的安全性与公平性。',
        '建立产品需求分析与竞品研究机制，持续追踪Curve、Uniswap、Aave、Compound等头部协议迭代动态，输出产品改进路线图，推动协议在链上部署。',
        '协同市场与BD团队，设计流动性激励活动（Liquidity Mining）方案，通过Mining激励与奖励释放曲线优化，提升资金利用率与LP留存率。',
      ],
      achievements: '高峰期swap的tvl达26.3M代币，日兑换量高达6.68M代币。'
    },
    {
      title: '高级产品规划工程师',
      company: '网宿科技',
      period: '2019.9 — 2019.12',
      highlight: '活动带来 10万+ 业绩',
      tags: ['云安全', '网宿网盾', 'DDoS', '渠道商'],
      responsibilities: [
        '规划平台的新产品线自助功能，优化现有自助平台，提升平台的用户体验。',
        '建设门户，提升平台影响力，提供更官方的有价值的文档和指南。',
        '定期更新平台资讯，规划平台性质活动促销，并对数据进行跟踪和复盘。',
        '规划渠道商功能，对接沟通并接入银联支付方式。',
      ],
      achievements: '活动上线1个月带来10万+业绩，有效销售线索增加10+。'
    },
    {
      title: '产品经理',
      company: '智顶互动',
      period: '2018.9 — 2019.8',
      highlight: '单用户收入达日均 0.02元',
      tags: ['小程序', '中老年', '音乐相册', '步数宝', '矩阵'],
      responsibilities: [
        '负责挖掘新项目，输出可行性分析，并筹备项目立项。',
        '对项目进行功能设计和规划，输出原型和需求文档，组织开发进行需求评审，推进项目上线。',
        '制定项目的运营规划，并定期输出数据报表进行分析。',
      ],
      achievements: '输出种子小程序矩阵，单用户收入达到日均0.02元。'
    },
    {
      title: '产品经理',
      company: '青苹果健康',
      period: '2017.7 — 2018.8',
      highlight: '商城半年业绩突破 50万',
      tags: ['医疗电商', '小程序', '拼团', '分销', '商品管理', '订单管理', 'App双端'],
      responsibilities: [
        '负责小程序商城的产品设计和规划，挖掘潜在需求，收集客户反馈，独立撰写需求文档。',
        '负责与技术团队沟通，协调开发人员，跟进项目进度，推进敏捷迭代。',
        '分析线上数据，埋点并跟踪数据验证，驱动产品持续改进和优化。',
        '重构商品管理系统，优化订单系统，协助策划平台运营工具，提升运营效率。',
      ],
      achievements: '商城上线半年业绩突破50万，协助运营活动10+次。'
    },
    {
      title: '高级产品策划',
      company: '游族网络',
      period: '2015.7 — 2017.7',
      highlight: '侧边栏充值占渠道 10%',
      tags: ['官网门户', '平台工具', 'App', '竞品分析'],
      responsibilities: [
        '负责未立项产品的前期竞品调研和可行性分析，包括团队协作工具和海淘转运方向。',
        '负责已有产品线的日常运营和活动策划，包括论坛活动和平台周年庆活动。',
        '负责新项目的功能设计和规划，跨部门组织评审会议，跟进项目进度，向上级汇报。',
      ],
      projects: [
        {
          name: '游戏侧边栏',
          status: '已上线',
          details: [
            '功能设计：独立完成产品调研以及功能规划，根据需求制作产品原型，组织会议确定功能评审及排期，定稿最终产品设计，跟进开发进度，推动测试最终上线。',
            '数据监控：定期观察数据，大皇帝接入4个月，侧边栏的充值平均占当月所有渠道充值的10%。',
            '项目成果：与各工作室人员合作，接入多款页游，例如大皇帝，女神联盟II，刀剑乱舞。',
          ]
        },
        {
          name: '官网改版',
          status: '已上线',
          details: [
            '需求收集：负责前期的需求收集和记录，与各部门负责人确定功能点。',
            '功能设计：规划部分功能，并组织会议进行需求会。',
            '项目跟进：会议结束后确定项目排期，实时跟进项目进度。',
            '项目收获：对用户积分和等级系统有更深入的体会。',
          ]
        },
        {
          name: 'H5小游戏App',
          status: '未上线',
          details: [
            '产品设计：独立完成产品调研并进行功能评审，制作产品原型。',
            '项目管理：跟踪产品的设计，开发，测试等各个环节，确保产品实现进度和质量，保证项目按时上线。',
            '产品接入：为运营提供资料申请微博等第三方接入，提供App的名称，logo，slogan等方案以供选择。',
          ]
        }
      ]
    },
  ]

  const skills = [
    { category: '设计软件', items: ['Photoshop', 'Sketch'] },
    { category: '原型工具', items: ['Axure', 'Mockplus'] },
    { category: '数据查询', items: ['SQL'] },
    { category: '流程图', items: ['ProcessOn'] },
  ]

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F5F5F0]/95 backdrop-blur-sm border-b border-[#E0E0E0]">
        <div className="max-w-5xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            LYQ
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-[#666666] hover:text-[#1A1A1A] transition-colors link-underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-[2px] bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`h-[2px] bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-[2px] bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#F5F5F0] border-b border-[#E0E0E0] py-6">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block px-8 py-3 text-[#666666] hover:text-[#1A1A1A] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <p className="text-sm text-[#666666] tracking-widest uppercase mb-4">产品经理 · 9年+经验</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                李雅晴
              </h1>
              <p className="text-lg text-[#666666] leading-relaxed mb-8 max-w-xl">
                专注产品设计，从游戏到互联网再到 DeFi，积累了跨领域的实战经验。擅长从0到1搭建产品，对 AMM DEX、借贷协议、流动性挖矿等 DeFi 核心产品有深入理解。
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/resume.pdf" className="btn-primary" download>
                  下载简历 PDF
                </a>
                <a href="#contact" className="px-6 py-3 border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all">
                  联系我
                </a>
              </div>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-[#1A1A1A]">
                <img
                  src="/images/avatar.jpg"
                  alt="李雅晴"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 bg-white border-y border-[#E0E0E0]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-sm text-[#E63946] tracking-widest uppercase">About</span>
            <h2 className="text-4xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>关于我</h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7 space-y-6">
              <p className="text-lg leading-relaxed">
                毕业于<span className="font-semibold">厦门大学软件工程</span>专业，曾在台湾铭传大学交换学习。从游族网络的游戏产品到青苹果健康的医疗电商，再到隐研科技的 DeFi 产品，跨越多个领域深耕产品之道。
              </p>
              <p className="text-lg leading-relaxed">
                我坚信优秀的产品源于对用户需求的深刻理解和对细节的极致追求。9年来，我始终保持着对产品创新的热情，致力于打造体验极致的产品。
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="card p-6">
                  <div className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>26.3M</div>
                  <div className="text-sm text-[#666666] mt-1">DeFi 项目最高 TVL</div>
                </div>
                <div className="card p-6">
                  <div className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>9+</div>
                  <div className="text-sm text-[#666666] mt-1">年产品经验</div>
                </div>
                <div className="card p-6">
                  <div className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>50万</div>
                  <div className="text-sm text-[#666666] mt-1">商城半年业绩</div>
                </div>
                <div className="card p-6">
                  <div className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>5家</div>
                  <div className="text-sm text-[#666666] mt-1">跨公司经验</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="card p-8">
                <h3 className="font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>教育背景</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-[#E0E0E0] pl-4">
                    <div className="font-semibold">厦门大学</div>
                    <div className="text-sm text-[#666666]">软件工程 · 本科</div>
                  </div>
                  <div className="border-l-2 border-[#E0E0E0] pl-4">
                    <div className="font-semibold">台湾铭传大学</div>
                    <div className="text-sm text-[#666666]">资讯工程 · 交换生</div>
                  </div>
                </div>
                <h3 className="font-bold mt-8 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>联系方式</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-[#666666]">邮箱</span>
                    <span>549855748@qq.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#666666]">电话</span>
                    <span>13917261487</span>
                  </div>
                </div>
                <h3 className="font-bold mt-8 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>证书资质</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-[#E0E0E0] pl-4">
                    <div className="font-semibold">PMP</div>
                    <div className="text-sm text-[#666666]">项目管理专业人士资格认证</div>
                  </div>
                  <div className="border-l-2 border-[#E0E0E0] pl-4">
                    <div className="font-semibold">CET-4</div>
                    <div className="text-sm text-[#666666]">大学英语四级</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-sm text-[#E63946] tracking-widest uppercase">Experience</span>
            <h2 className="text-4xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>工作经历</h2>
            <div className="section-divider" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card p-8 border-2 border-[#1A1A1A]">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{exp.title}</h3>
                      <span className="tag">{exp.period}</span>
                    </div>
                    <div className="text-[#E63946] font-medium">{exp.company}</div>
                  </div>
                  <div className="shrink-0">
                    <div className="inline-block px-4 py-2 bg-[#1A1A1A] text-white text-sm">
                      {exp.highlight}
                    </div>
                  </div>
                </div>

                {/* 工作职责 */}
                <div className="border border-[#E0E0E0] p-6 mb-6">
                  <div className="text-sm text-[#E63946] mb-4 tracking-widest uppercase font-medium">工作职责</div>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-[#666666] leading-relaxed pl-4 border-l-2 border-[#E0E0E0]">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* 项目经验 (游族网络) */}
                {exp.projects && (
                  <div className="border border-[#E0E0E0] p-6 mb-6">
                    <div className="text-sm text-[#E63946] mb-4 tracking-widest uppercase font-medium">项目经验</div>
                    <div className="space-y-6">
                      {exp.projects.map((project, pIndex) => (
                        <div key={pIndex} className="border border-[#E0E0E0] p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{project.name}</span>
                            <span className={`tag ${project.status === '已上线' ? 'bg-green-100 border-green-300' : 'bg-yellow-100 border-yellow-300'}`}>
                              {project.status}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {project.details.map((detail, dIndex) => (
                              <li key={dIndex} className="text-[#666666] text-sm leading-relaxed pl-4 border-l-2 border-[#E0E0E0]">{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                {/* 成果 */}
                {exp.achievements && (
                  <div className="mt-6 pt-6 border-t-2 border-[#1A1A1A]">
                    <div className="text-sm text-[#E63946] mb-2 tracking-widest uppercase font-medium">成果</div>
                    <p className="text-[#1A1A1A] font-medium">{exp.achievements}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-8 bg-white border-y border-[#E0E0E0]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-sm text-[#E63946] tracking-widest uppercase">Skills</span>
            <h2 className="text-4xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>技能专长</h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="card p-6">
                <div className="text-sm text-[#E63946] mb-4 tracking-widest">{skill.category}</div>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#1A1A1A]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card p-8">
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>专业优势</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-[#E63946]">01</span>
                  产品设计
                </div>
                <p className="text-sm text-[#666666]">从需求分析到产品落地，擅长从0到1搭建产品，输出高质量原型与需求文档</p>
              </div>
              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-[#E63946]">02</span>
                  DeFi 深耕
                </div>
                <p className="text-sm text-[#666666]">精通 AMM、借贷协议、流动性挖矿等 DeFi 核心机制，有 26.3M TVL 实战经验</p>
              </div>
              <div>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-[#E63946]">03</span>
                  跨部门协作
                </div>
                <p className="text-sm text-[#666666]">协调技术、运营、设计等多部门，推动项目高效落地，保障产品质量</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <span className="text-sm text-[#E63946] tracking-widest uppercase">Contact</span>
            <h2 className="text-4xl font-bold mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>联系我</h2>
            <div className="section-divider mx-auto" />
          </div>

          <p className="text-lg text-[#666666] mb-12">
            期待与您交流，共同探讨产品之道
          </p>

           <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
            <a
              href="mailto:549855748@qq.com"
              className="card px-8 py-6 flex items-center justify-center gap-4 hover:bg-[#1A1A1A] hover:text-white transition-all border-2 border-[#1A1A1A]"
            >
              <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-[#666666] tracking-widest uppercase mb-1">邮箱</div>
                <span className="font-medium">549855748@qq.com</span>
              </div>
            </a>
            <a
              href="tel:13917261487"
              className="card px-8 py-6 flex items-center justify-center gap-4 hover:bg-[#1A1A1A] hover:text-white transition-all border-2 border-[#1A1A1A]"
            >
              <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-[#666666] tracking-widest uppercase mb-1">电话</div>
                <span className="font-medium">13917261487</span>
              </div>
            </a>
          </div>

          <div className="pt-8 border-t border-[#E0E0E0]">
            <p className="text-sm text-[#666666]">
              © 2024 李雅晴 · 产品经理
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App